import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'

import TodoAddForm from '@/component/sections/todoAddForm'
import TodoList from '@/component/sections/todoList'

import pageStyles from '@/styles/page.module.scss'
import styles from "./styles/homePage.module.scss"

type HomeViewProps = {
  currentTime: string | undefined
}

const HomeView = (props: HomeViewProps) => {
  return (
    <main className={`${pageStyles.page} ${styles.homePage}`}>
      <Container>

        <Box display="flex" flexDirection="column">

          <Box
            fontWeight="fontWeightBold"
            fontSize="h3.fontSize"
          >
            {props?.currentTime}
          </Box>

          <Divider />

          <TodoAddForm />

          <TodoList />

        </Box>
      </Container>
    </main>
  );
};

export default HomeView;