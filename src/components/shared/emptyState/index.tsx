import Typography from '@material-ui/core/Typography';

import Icon from '@/component/shared/icon'

import styles from './styles/emptyState.module.scss'

type EmptyStateProps = {
  title: string
  subtitle?: string
  icon?: string
}

const EmptyState = (props: EmptyStateProps) => {
  return (
    <div className={styles.emptyState}>

      {props?.icon && (
        <div className={styles.iconContainer}>
          <Icon name={props.icon} className={styles.icon} />
        </div>
      )}

      <Typography variant="h6" component="h4" color="primary" gutterBottom>
        {props.title}
      </Typography>

      {props?.subtitle && (
        <Typography variant="body2" component="p" color="textSecondary" gutterBottom>
          {props.subtitle}
        </Typography>
      )}

    </div>
  );
};

export default EmptyState;