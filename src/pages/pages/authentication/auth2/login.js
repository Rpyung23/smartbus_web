import Link from 'Link';
import Image from 'next/image';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import LAYOUT from 'constant';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import AuthLogin from 'components/authentication/auth-forms/AuthLogin';
import AuthFooter from 'components/ui-component/cards/AuthFooter';
import AuthWrapper2 from 'components/authentication/AuthWrapper2';
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo from 'components/ui-component/Logo';
import BackgroundPattern2 from 'components/ui-component/cards/BackgroundPattern2';
import AuthSlider from 'components/ui-component/cards/AuthSlider';

// assets
const imgMain = '/assets/images/auth/img-a2-login.svg';

// carousel items
const items = [
  {
    title: 'Components Based Design System',
    description: 'Powerful and easy to use multipurpose theme'
  },
  {
    title: 'Ready to use components',
    description: 'Ready made component to apply directly'
  },
  {
    title: 'Multiple dashboard and widgets',
    description: '100+ widgets and customize controls'
  }
];

// ================================|| AUTH2 - LOGIN ||================================ //

const Login = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Page title="Login">
      <AuthWrapper2>
        <Grid container justifyContent={matchDownSM ? 'center' : 'space-between'} alignItems="center">
          <Grid item md={6} lg={7} xs={12} sx={{ minHeight: '100vh' }}>
            <Grid
              sx={{ minHeight: '100vh' }}
              container
              alignItems={matchDownSM ? 'center' : 'flex-start'}
              justifyContent={matchDownSM ? 'center' : 'space-between'}
            >
              <Grid item sx={{ display: { xs: 'none', md: 'block' }, m: 3 }}>
                <Link href="#">
                  <Logo />
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
                sx={{ minHeight: { xs: 'calc(100vh - 68px)', md: 'calc(100vh - 152px)' } }}
              >
                <Stack justifyContent="center" alignItems="center" spacing={5} m={2}>
                  <Box component={Link} href="#" sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Logo />
                  </Box>
                  <AuthCardWrapper border={matchDownMD}>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            Hi, Welcome Back
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <AuthLogin loginProp={2} />
                      </Grid>
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid item container direction="column" alignItems="center" xs={12}>
                          <Typography
                            component={Link}
                            href="/pages/authentication/auth2/register"
                            variant="subtitle1"
                            sx={{ textDecoration: 'none' }}
                          >
                            Don&apos;t have an account?
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </AuthCardWrapper>
                </Stack>
              </Grid>
              <Grid item xs={12} sx={{ m: 3 }}>
                <AuthFooter />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} lg={5} sx={{ position: 'relative', alignSelf: 'stretch', display: { xs: 'none', md: 'block' } }}>
            <BackgroundPattern2>
              <Grid item container justifyContent="center">
                <Grid item xs={12}>
                  <Grid item container justifyContent="center" sx={{ pb: 8 }}>
                    <Grid item xs={10} lg={8} sx={{ '& .slick-list': { pb: 2 } }}>
                      <AuthSlider items={items} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ position: 'relative' }}>
                  <div
                    style={{
                      maxWidth: '100%',
                      margin: '0 auto',
                      display: 'block',
                      position: 'relative',
                      zIndex: 5,
                      textAlign: 'center'
                    }}
                  >
                    <Image alt="Auth method" src={imgMain} width={300} height={300} />
                  </div>
                </Grid>
              </Grid>
            </BackgroundPattern2>
          </Grid>
        </Grid>
      </AuthWrapper2>
    </Page>
  );
};

Login.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.minimal}>{page}</Layout>;
};

export default Login;
