### redux-thunk
миддлвер, для работы с асинхронными запросами

action creator => action => dispatch => middleware

обычно action creator возвращает объект с экшеном, но redux-thunk позволяет возвратить не только объект но и функцию из action creator. В случае возврата функции redux-thunk вызовет ее, это все что он делает. На вход эта функция принимает dispatch, getState, которые контролируем и вызываем когда прошел запрос



# debug_session=session_name
Нужно чтобы автоматом в локалсторадж сохранять стейт и восстанавливать при перзагрузке страницы



# reducers
1) нельзя возвращать undefined (будет ошибка)
2) Единественное что можно возвращать это результат взаимодействия state и action переданные в редьюсер
3) pure functions. не мутировать возвращаемое значение



### raw example
```typescript
// 1)
// Создаю action creator
const createPolicy = ({name, amount}) => ({
    // который возвращает action
    type: 'CREATE_POLICY',
    payload: {
        name,
        amount
    }
});

const deletePolicy = ({name}) => ({
    type: 'DELETE_POLICY',
    payload: {
        name
    }
});

const createClaim = ({name, amount}) => ({
    type: 'CREATE_CLAIM',
    payload: {
        name, amount
    }
});

// 2)
// Reducers
const claimsHistory = (oldListOfClaims = [], action) => {
    switch (action.type) {
        case 'CREATE_CLAIM': {
            return [...oldListOfClaims, action.payload];
        }
        default:
            return oldListOfClaims;
    }
};

const policies = (listOfPolicies = [], action) => {
    switch (action.type) {
        case 'CREATE_POLICY': {
            return [...listOfPolicies, action.payload];
        }
        case 'DELETE_POLICY': {
            return listOfPolicies.filter(({name}) => name !== action.payload.name);
        }
        default:
            return listOfPolicies;
    }
};

// 3)
// Combine Reducers
const ourDepartments = combineReducers({
    claimsHistory,
    policies
});

// 4)
// Создаю стор, который содержит всю дату
const store = createStore(
    ourDepartments,
    // включаю дев тулы
    process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 5)
// Вызываю actions
const action = createPolicy({
    name: "Max",
    amount: 31
});

const action1 = createPolicy({
    name: "Aliya",
    amount: 32
});

const action2 = createClaim({
    name: "Liliya",
    amount: 4
});

const action3 = createClaim({
    name: "Alisa",
    amount: 0
});

const action4 = deletePolicy({
    name: "Aliya"
});


// 6)
// dispatch action
store.dispatch(action);
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);

// console.log(store.getState());
```