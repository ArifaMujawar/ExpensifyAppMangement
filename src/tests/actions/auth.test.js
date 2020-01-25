import {login, logout} from '../../actions/auth';

test('should generaate login action object', ()=>{
    const uid ='abc232';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generaate logout action object', ()=>{
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT',

    });
});