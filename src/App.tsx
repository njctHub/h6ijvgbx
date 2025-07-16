import './framer/styles.css'

import MainFramerComponent from './framer/main'
import Navigation2FramerComponent from './framer/navigation-2'
import FooterFramerComponent from './framer/navigation/footer'
import FaqSSectionFramerComponent from './framer/faq-s-section'
import CoachingPlanFramerComponent from './framer/cards/coaching-plan'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 '>
      <MainFramerComponent.Responsive/>
      <Navigation2FramerComponent.Responsive/>
      <FooterFramerComponent.Responsive/>
      <FaqSSectionFramerComponent.Responsive/>
      <CoachingPlanFramerComponent.Responsive
        price={""}
        title={"Precision Filtering something else"}
        feature1={"Only want Tesla tweets from Elon? Done. Follow anyone. Filter by what you actually care about."}
      />
    </div>
  );
};