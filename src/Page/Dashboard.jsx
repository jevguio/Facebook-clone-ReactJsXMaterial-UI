// src/App.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/LeftSidebar';
import LeftSidebarMarketPlace from '../components/LeftSidebarMarketPlace';
import RightSidebar from '../components/RightSidebar';
import RightSidebar_Video from '../components/RightSidebar_Video';
import MainContent from '../components/Tabs/MainContent';
import { CssBaseline, Container, Box, Typography, Card, CardContent, Button, ListItem } from '@mui/material';
import FriendsTab from '../components/Tabs/FriendsTab';
import VideogameTab from '../components/Tabs/VideogameTab';
import MarketplaceTab from '../components/Tabs/MarketplaceTab';
import VideoTab from '../components/Tabs/VideoTab';
import { useMediaQuery } from '@mui/material';
import { useRouteError } from "react-router-dom";
import Footer from '../components/footer';
import FacebookView from '../Page/FacebookView';
const App = ({ errors, page }) => {

  const isRightScreen = useMediaQuery('(max-width:900px)');
  const friendtab = useMediaQuery('(max-width:1200px)');
  const [tab, setTab] = useState('Home');
  
  const [post, setPost] = useState(null);
  const isWholeScreen = useMediaQuery('(max-width:1200px)');
  const sideBar = <Sidebar tab={tab} setTab={setTab} />;
  const error = useRouteError();
  return (
    <>
      
      <Header tab={tab} setTab={setTab} />
      {errors ?
        <Card sx={{ marginTop: '15%', textAlign: 'center', width: '60%', marginLeft: 'auto', marginRight: 'auto', boxShadow: 'black 0 0 5px -3px' }}>
          <CardContent>
            <Typography variant='h2' sx={{ paddingTop: '20px' }}>Oops!</Typography>
            <Typography variant='h6' sx={{ paddingTop: '20px' }}>Sorry, an unexpected error has occurred.</Typography>
            <Typography variant='h6' sx={{ paddingBottom: '20px' }}>{error.statusText || error.message}</Typography>
            <Button variant='text' sx={{ paddingBottom: '20px' }} href='/dashboard'>Try Again</Button>
          </CardContent>
        </Card>
        : post&&tab==='Home'? <FacebookView post={post} setPost={setPost}></FacebookView> :
          <>
            {tab === 'Home' ?

              <Container sx={{ display: 'flex', marginTop: '5%', width: '100%', padding: '0' }}>
                {isWholeScreen ? '' :
                  <>{sideBar}

                  </>
                }
                {isRightScreen ? '' :
                  <Box sx={{ width: '40%' }}></Box>}
                <MainContent setPost={setPost}/>

                {isRightScreen ? '' :
                  <><Box sx={{ width: '40%' }}></Box>
                    <RightSidebar /></>}
              </Container>
              : tab === 'Friends' ?
                <Container sx={{ display: 'flex', marginTop: '5%', width: '100%' }}>
                  {isWholeScreen ? '' :
                    <>{sideBar}
                      <Box sx={{ width: friendtab?'20%':'5%',marginRight:friendtab?'5.5%':'15.5%' }}></Box> </>
                  }

                  <FriendsTab />
                </Container>
                : tab === 'Watch' ?
                  <Container sx={{ display: 'flex', marginTop: '5%', width: '100%' }}>

                    <VideoTab />
                    {isWholeScreen ? '' :
                      <><RightSidebar_Video />
                      </>
                    }

                  </Container>
                  : tab === 'Marketplace' ?
                    <Container sx={{ display: 'flex', marginTop: '5%', width: '100%' }}>
                      {isWholeScreen ? '' :
                        <>

                          <LeftSidebarMarketPlace />
                          <Box sx={{ width: friendtab?'20%':'5%',marginRight:friendtab?'5.5%':'15.5%'}}></Box> </>
                      }

                      <MarketplaceTab />
                    </Container>
                    : tab === 'Game' ?
                      <Container sx={{ display: 'flex', marginTop: '5%', width: '100%' }}>
                        {isWholeScreen ? '' :
                          <>{sideBar}
                            <Box sx={{ width: '30%' }}></Box> </>
                        }

                        <VideogameTab />

                      </Container>

                      : ''

            }
          </>
      }{tab === 'Watch' ? '' : <Box sx={{ bottom: 0, position: 'fixed', width: '20%', padding: '10px' }}>
        <Footer>  </Footer>
      </Box>}

 
    </>
  );
};

export default App;
