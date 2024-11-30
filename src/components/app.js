import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
            <UptimeRobot />
        </div>
        <div id='footer'>
          <p>基于 <Link to='https://uptimerobot.com/' text='UptimeRobot' /> 接口制作，检测频率 5 分钟</p>
        </div>
      </div>
    </>
  );
}

export default App;
