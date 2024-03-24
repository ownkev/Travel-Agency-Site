$(function(){
    var pages = ['index','about','contact','online'];
    var pathname = window.location.pathname;

    $('.nav-link').each(function(item){
      if(pathname.includes(pages[item])){
        $(this).addClass('active');
        $(this).attr('aria-current', 'page');
      }
    })
  });