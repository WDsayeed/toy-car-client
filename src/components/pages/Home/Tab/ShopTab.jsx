import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopTab = () => {
        return (
                <Tabs>
                <TabList>
                  <Tab>Sport car</Tab>
                  <Tab>Title 2</Tab>
                </TabList>
            
                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
        );
};

export default ShopTab;