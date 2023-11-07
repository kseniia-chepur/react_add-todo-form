import cn from 'classnames';
import { Todo } from '../../api/types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo:Todo
};

export const TodoInfo:React.FC<Props> = ({ todo }) => (
  <article
    key={todo.id}
    data-id={todo.id}
    className={cn('TodoInfo', { 'TodoInfo--completed': todo.completed })}
  >
    <h2 className="TodoInfo__title">
      {todo.title}
    </h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);