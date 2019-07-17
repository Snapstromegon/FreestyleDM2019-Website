import '../Components/SnapRouter/SnapRouter.js';

const routerView = document.querySelector('snap-routed');

routerView.addRoute(/ausschreibung/, '/Components/Pages/snap-ausschreibung.js');
routerView.addRoute(/impressum/, '/Components/Pages/snap-impressum.js');
routerView.addRoute(/faq/, '/Components/Pages/snap-faq.js');
routerView.addRoute(/loading/, '/Components/SnapRouter/snap-loading.js');
routerView.addRoute(/\/$/, '/Components/Pages/snap-home.js');