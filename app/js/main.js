import '../Components/SnapRouter/SnapRouter.js';
import '../Components/SnapStartlist/snap-startlist.js';

if(navigator.serviceWorker){
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  });
}

const routerView = document.querySelector('snap-routed');

routerView.addRoute(/ausschreibung/, () =>
  import('../Components/Pages/snap-ausschreibung.js').then(m => m.default)
);
routerView.addRoute(/impressum/, () =>
  import('../Components/Pages/snap-impressum.js').then(m => m.default)
);
routerView.addRoute(/faq/, () =>
  import('../Components/Pages/snap-faq.js').then(m => m.default)
);
routerView.addRoute(/pwa/, () =>{
  debugger;
  return import('../Components/Pages/snap-pwa.js').then(m => m.default)
});
routerView.addRoute(/eventmap/, () =>
  import('../Components/Pages/snap-map.js').then(m => m.default)
);
routerView.addRoute(/loading/, () =>
  import('../Components/SnapRouter/snap-loading.js').then(m => m.default)
);
routerView.addRoute(/\/$/, () =>
  import('../Components/Pages/snap-home.js').then(m => m.default)
);
