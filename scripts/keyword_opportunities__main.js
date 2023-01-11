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

  var n = $('.checkbox:checkbox').length

  $(document).ready(function () {
      $("table").on("change", "input#checkAll", function () {
          checked = $("input.checkbox[type='checkbox']:checked").length;
          $("#numberSelected").html(checked > 0 ? checked : "");
      });

  });
  $(document).on('click', '.yes_btn', function () {
      $("#numberSelected").html('All 30,400 ');
      $(this).addClass('hide')
  });

  $('#checkAll').on('click', function () {


      if ($(this).is(':checked')) {

          console.log('true');
          $('.default_box').addClass('hide')
          $('.create').removeClass('hide')
          $('.footer').addClass('hide')
          document.querySelector('.create').disabled = false;
          $('.message_tooltip2').removeClass('hide');
          $('.yes_btn').removeClass('hide')

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

          console.log(n)

          if ($('.checkbox:checkbox').filter(':checked').length > 0) {
              $('.default_box').addClass('hide')
              $('.create').removeClass('hide')
              $('.footer').addClass('hide')
              document.querySelector('.create').disabled = false;
              $('.message_tooltip2').addClass('hide');
              $("#numberSelected").html(n);
              $('.yes_btn').removeClass('hide')


              if ($('.checkbox:checkbox').filter(':checked').length == n) {
                  console.log(n + 'rr')
                  $('.message_tooltip2').removeClass('hide');
                  $('.default_box').addClass('hide')
                  $('.create').removeClass('hide')
                  $('.footer').addClass('hide')
                  document.querySelector('.create').disabled = false;

                  document.getElementById("checkAll").checked = true;
              }

          } else {
              $('.default_box').removeClass('hide')
              $('.create').addClass('hide')
              $('.footer').removeClass('hide')
              document.querySelector('.create').disabled = true;
              document.getElementById("checkAll").checked = false;
          }
      });
  })


  $(document).on('click', '.popup-close', function () {
      $(this).parents('.chosen-drop').removeClass('show');
  });


  $(document).on('click', '#openpredirect', function () {
      $(this).parents('.info_item').toggleClass('open');
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

  $(document).on('click', '.howWork', function () {
      document.querySelector('#howTooltip').classList.toggle('show')
  });

  var hide_opportunities_btn = document.querySelector(".hide_opportunities_btn");

  $(document).on('click', '.hide_opportunities_btn', function () {
      document.querySelector('.opportunities_box').classList.toggle('show')

  });


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



  $(window).scroll(function (e) {
      var $el = $('.fixedElement');
      var isPositionFixed = ($el.css('position') == 'fixed');
      if ($(this).scrollTop() > 350 && !isPositionFixed) {
          $el.css({
              'position': 'sticky',
              'top': '0px',
          });
          $el.addClass('collapsing')
          $('.thead').addClass('stiky');
          var height = $el.innerHeight() + 'px'
          $('.thead').css({
              top: height
          })
      }
      if ($(this).scrollTop() < 350 && !isPositionFixed) {
          $el.css({
              'position': 'static',
              'top': '0px',
          });
          $('.thead').removeClass('stiky');
          $el.removeClass('collapsing')
      }
  });

  var filter_show = document.getElementsByClassName("cell-sm")
  $(document).on('click', '.openFilter', function () {

      for (var i = 0; i < filter_show.length; i++) {
          filter_show[i].classList.remove('show');
      }

      $(this).parents('.cell-sm').toggleClass('show')
  });

  $(document).on('click', '.close_filter', function () {

      $(this).parents('.cell-sm').toggleClass('show')
  });

  var infoBlock = $('#info_block')
  var showChart = $('#show_charts')

  $(document).on('click', '#hide_grafs', function () {

      $(this).parents('.fixedElement').addClass('collapsed')


      infoBlock.addClass('hide')
  });
  $(document).on('click', '#show_charts', function () {

      $('.fixedElement').removeClass('collapsed')

      infoBlock.removeClass('hide')
  });
