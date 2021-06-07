import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import pageStyles from '@/styles/page.module.scss'
import styles from './styles/notFound.module.scss';

const NotFoundView = () => {
  return (
    <main className={`${pageStyles.page} ${styles.notFoundPage} `}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
      >
        <Typography variant="h2" component="h2">
          Sorry, nothing here
        </Typography>
      </Box>
    </main>
  );
};

export default NotFoundView;