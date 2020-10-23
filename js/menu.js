const menuModule = (() => {
  return {
      toggleNav: () => {
        //clickイベント
          document.getElementById('nav-toggle-button').addEventListener('click', event => {
              const classes = document.querySelector('html').classList
              //html内に”nav-open”というCSSクラスがなければ、”nav-open”を追加
              //html内に”nav-open”というCSSクラスがあれば、”nav-open”を削除
              if (classes.value.includes('nav-open')) {
                  classes.remove('nav-open')
              } else {
                  classes.add('nav-open')
              }
          })
      },
      //js-black-bg”というidを持つ要素（メニュー表示中の背景要素）をクリックした時
      //html内の”nav-open”というCSSクラスを削除する
      closeNav: () => {
          document.getElementById('js-black-bg').addEventListener('click', event => {
              document.querySelector('html').classList.remove('nav-open')
          })
      }
  }
})();

menuModule.toggleNav();
menuModule.closeNav();