import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{
    //컴포넌트가 리렌더링을 할 지 말지 정해주는 함수
    //따로 구현되지 않으면 언제나 true 를 반환
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render(){
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;