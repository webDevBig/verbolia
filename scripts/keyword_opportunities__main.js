  $(document).on('click', '.btn_show', function () {
      $(this).parents('tr').toggleClass('active')
      $(this).toggleClass('btn_hide')
  });


  $(document).on('click', '.openCheck', function () {
      $(this).parents('.modal__inner').find('.modal__header').toggleClass('hide')
      $(this).parents('.modal__inner').find('.modal__content').toggleClass('hide')
  });

  $(document).on('click', '.import_btn', function () {
      $(this).parents('.modal__inner').find('.modal__header').toggleClass('hide')
      $(this).parents('.modal__inner').find('.modal__content').toggleClass('hide')
  });
  $(document).on('click', '.cancel_import', function () {
      $(this).parents('.modal__inner').find('.modal__header').toggleClass('hide')
      $(this).parents('.modal__inner').find('.modal__content').toggleClass('hide')
  });
  const seedList = document.querySelector(".seedList");
  const inputs = document.querySelectorAll(".checkbox");
  const bulkAction = document.querySelector(".block-table__bulk-action");



  $('#checkAll').on('click', function () {
      if ($(this).is(':checked')) {
          console.log('true');
          $('.default_box').addClass('hide')
          $('.create').removeClass('hide')
          $('.footer').addClass('hide')
          document.querySelector('.create').disabled = false;
          $('.message_tooltip2').removeClass('hide');

      } else {
          console.log('false');
          $('.default_box').removeClass('hide')
          $('.create').addClass('hide')
          $('.footer').removeClass('hide')
          document.querySelector('.create').disabled = true;
          $('.message_tooltip2').addClass('hide');
      }
  })


  inputs.forEach(el => {
      el.addEventListener("click", () => {
          if ($('.checkbox:checkbox').filter(':checked').length > 0) {

              bulkAction.classList.remove('hide')
              seedList.classList.add('hide')
              return false;

          } else {
              bulkAction.classList.add('hide')
              seedList.classList.remove('hide')
          }
      });
  })

  $(document).on('click', '.no_btn', function () {
      //      $('.default_box').removeClass('hide')
      //      $('.create').addClass('hide')
      //      $('.footer').removeClass('hide')
      //      document.querySelector('.create').disabled = true;
      $('.message_tooltip2').addClass('hide');
  });

  $(document).on('click', '.yes_btn', function () {
      $('.message_tooltip2').addClass('hide');
  });
  $(document).on('click', '.close_pop_up', function () {
      $(this).parents('.pop_up_window').toggleClass('hide');
  });

  var tooltip_icon = document.querySelector(".icon-info");

  tooltip_icon.addEventListener("mouseover", mOver, false);
  tooltip_icon.addEventListener("mouseout", mOut, false);

  function mOver() {
      document.querySelector(".tooltip").style.opacity = 1;
  }

  function mOut() {
      document.querySelector(".tooltip").style.opacity = 0;
  }

  $(document).on('click', '#openpredirect', function () {
      $(this).parents('.info_item').toggleClass('open');
  });


  $(document).on('click', '.howWork', function () {
      $(this).parents('.info_item').toggleClass('open');
      document.querySelector('.check_header').classList.toggle('show')

  });
  $(document).on('click', '.close-message_tooltip', function () {
      document.querySelector('.check_header').classList.toggle('show')

  });

  var howWork = document.querySelector(".howWork");
  howWork.addEventListener("mouseover", howWorkOver, false);
  howWork.addEventListener("mouseout", howWorkOut, false);

  function howWorkOver() {
      howWork.querySelector('img').setAttribute("src", "images/lamp_white.svg");
  }

  function howWorkOut() {
      howWork.querySelector('img').setAttribute("src", "images/lamp.svg");
  }


  var bars = document.querySelectorAll('.meter > span');
  console.clear();

  setInterval(function () {
      bars.forEach(function (bar) {
          var getWidth = parseFloat(bar.dataset.progress);

          for (var i = 0; i < getWidth; i++) {
              bar.style.width = i + '%';
          }
      });
  }, 500);
