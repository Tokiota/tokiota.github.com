

$(document).ready(function(){
  

  var indexPage = function(){
    
    var _posts = [];
    var _posts_per_page = 6;
    var _months = ["Enero", "Febrero", "Marzo", "Abríl", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    var _getNextPost = null;

    function initShowPosts(showMore){
      loadJSON('search.json',
        function(data) { 
          _posts = data; 
          _getNextPost = createIterator(_posts, _posts_per_page);
          
          if(showMore){
            showMorePosts();
          }
        },
        function(xhr) { 
          console.error("ui algo ha pasado")
          console.error(xhr); 
        }
      );
    }

    function showMorePosts () {
      
      var nextPost = _getNextPost();
      
      if (nextPost.length == 0) {
        var div = document.getElementById('divContentLoadMorePosts');
        div.style.display = 'none';
      }
      else {
        nextPost.forEach(post => {
          var datePost = new Date(post.date);
          var div = document.getElementById('divPostRecentContent');
          div.innerHTML += `<div class="col-12 col-sm-6 col-lg-4 mb-3">
          <div class="card h-100">
            <div class="card-img-box" style="background-image:url(${ post.featured_image });"></div>
            <div class="card-body">
              <p class="post-info">
                <span class="post-date">${ ("0" + datePost.getDate()).slice(-2) } de ${_months[datePost.getMonth()]} del ${datePost.getFullYear()}</span> <span class="post-author-name">por ${ post.author }</span>
              </p>
              <h4 class="card-title">
                <a href="${post.url}">${ post.title }</a>
              </h4>
              <p class="card-text">
                ${ post.summary }
              </p>
              <a href="${ post.url }" class="myButton">Leer más &rsaquo;&rsaquo; </a>
            </div>
          </div>
          </div>`;
        });
      }
    }

    function loadJSON(path, success, error)
    {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (success)
                        success(JSON.parse(xhr.responseText));
                } else {
                    if (error)
                        error(xhr);
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    }

    function createIterator(a, n) {
        var current = 0,
            l = a.length;
        return function() {
            end = current + n;
            if(current == -1)
              return [];
            var part = a.slice(current,end);
            current =  end < l ? end : -1;
            return part;
        };
    };

    var rto = {
      Posts: _posts,
      InitShowPosts : initShowPosts,
      ShowMorePosts: showMorePosts,
    };
    return rto;
  }();
  window.indexPage = indexPage;
  window.indexPage.InitShowPosts(true);
  
});
