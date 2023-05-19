import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopTab = () => {
        return (
                <div className='md:w-2/4 mx-auto'>
                  <Tabs>
                <TabList>
                  <Tab></Tab>
                  <Tab>Title 2</Tab>
                </TabList>
            
                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
                </div>
        );
};

export default ShopTab;