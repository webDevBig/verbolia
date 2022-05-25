  $(document).on('click', '.close_pop_up', function () {
      $(this).parents('.pop_up_window').toggleClass('hide');
  });
  $('.resize_btn').click(function () {
      $('.header').toggleClass('hide')
      $('.sidebar').toggleClass('hide')
      $('.content').toggleClass('resize')
      $('.main-content').toggleClass('resize')
      $(this).toggleClass('resize')
  })
  // get all folders in our .directory-list
  var allFolders = $(".directory-list li > ul");
  allFolders.each(function () {

      // add the folder class to the parent <li>
      var folderAndName = $(this).parent();
      folderAndName.addClass("folder");

      // backup this inner <ul>
      var backupOfThisFolder = $(this);
      // then delete it
      $(this).remove();
      // add an <a> tag to whats left ie. the folder name
      folderAndName.wrapInner("<a href='#' />");
      // then put the inner <ul> back
      folderAndName.append(backupOfThisFolder);

      // now add a slideToggle to the <a> we just added
      folderAndName.find("a").click(function (e) {
          $(this).siblings("ul").slideToggle("slow");
          e.preventDefault();
          $(this).toggleClass('arrow')
      });

  });

  $('.folders_box .second_level.show_file').click(function () {
      console.log('h')
      var show_code = $('#codeMirror');
      var child = $('.CodeMirror')
      child.remove();
      let codeMirror = CodeMirror(document.getElementById('codeMirror'), {
          value: "$(document).on('click', '.close_pop_up', function () {\n$(this).parents('.pop_up_window').toggleClass('hide');\n});\n",
          mode: "javascript",
          lineNumbers: true,
          lineWrapping: true
      });

  })

  $(document).on('click', '.click', function () {
      $('.click').removeClass('active');
      $(this).toggleClass('active');
  });
$(document).on('click', '.validate', function () {
      $('.tabs').toggleClass('show');
      $(this).toggleClass('hide');
  });
$(document).on('click', '.close_info', function () {
      $('.tabs').toggleClass('show');
      $('.validate').toggleClass('hide');
  });
