import AboutView from './About';
import MainView from './Main';

import MalwareGloss from './Malware/MalwareGloss';
import PhishingView from './Phishing';
import SocialEngineeringView from './SocialEngineering';
import ExampleEmailView from './ExampleEmail';

const routes = [
  {
    name: 'Home',
    to: '/home',
    component: MainView,
  },
  {
    name: 'Phishing',
    to: '/phishing',
    component: PhishingView,
  },
  {
    name: 'Malware',
    to: '/malware',
    component: MalwareGloss,
  },
  {
    name: 'Social Engineering',
    to: '/social-engineering',
    component: SocialEngineeringView,
  },
  {
    name: 'About',
    to: '/about',
    component: AboutView,
  },
  {
    name: 'Example Email',
    to: '/example',
    component: ExampleEmailView,
  },
];

export { routes };
