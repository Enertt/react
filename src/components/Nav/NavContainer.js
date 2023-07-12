import { connect } from 'react-redux';
import Nav from './Nav';

let mapStateToProps = (state) => ({
    myId: state.authReduser.loginData.id
});

export default connect(mapStateToProps) (Nav);