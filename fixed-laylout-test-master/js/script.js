$(document).ready(function () {
  const link = $('.wrapper');
  const menu = $('.top-menu');
  const parent = $('body');

  // Хэндлер закрывающий меню на мобилках
  const setHideMenuHandler = () => {
    menu.swipe('destroy');
    parent.off('mouseup.top-menu');
    link.removeClass('wrapperActive');
    menu.removeClass('active');
  };

  // Открыте меню
  link.click(() => {
    menu.css({left: `0`});
    link.addClass('wrapperActive');
    menu.addClass('active');

    // Отслеживание клика за пределами блока
    parent.on('mouseup.top-menu', function (e) {
      if (menu.has(e.target).length === 0) {
        setHideMenuHandler()
      }
    });

    // Свайп влево, убираем / закрываем меню
    menu.swipe({
      swipe: (e) => {
        setHideMenuHandler()
      },
      swipeStatus(event, phase, direction, distance) {
        if (phase === 'move' && direction === 'left') {
          menu.css({left: `-${distance}px`})
        } else if (phase === 'cancel') {
          menu.css({left: `0`})
        }
      },
      threshold: 200
    });

    // Выбор пункта меню - закрываем
    menu.find('ul > li > ul li a').click(setHideMenuHandler)
  });
});
