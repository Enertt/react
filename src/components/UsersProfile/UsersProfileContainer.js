import React, { useEffect} from 'react';
import UsersProfile from './UsersProfile';
import axios, * as others from 'axios';
import { connect, useDispatch } from 'react-redux';
import { setUserDataAC } from '../../redux/usersProfileReduser';
import { addPostAC } from '../../redux/profile_reduser';
import { useLocation, useNavigate, useParams } from "react-router-dom";

function UsersProfileContainer(props) {
    const { userId } = useParams();
     let currUserId = userId||2

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + currUserId)
            .then((response) => {
                props.setUserData(response.data);
            });
    }, [userId]);
    return (
        <div>
            <UsersProfile { ...props } />
        </div>
    );
}

let mapStateToProps = (state) => ({
    postsData: state.profileReduser.postsData,
    userData: state.profileReduser.userData,
    postsData_count: state.profileReduser.postsData_count,
});

let mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (newUserData) => {
            dispatch(setUserDataAC(newUserData))
        },

        addPost: (text) => {
            dispatch(addPostAC(text))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (UsersProfileContainer);

// class UsersProfileContainer extends React.Component {

//     componentDidMount() {
//         let userId = this.props.router.params.userId;
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
//             this.props.setUserData(response.data);
//             debugger;
//         });
//     };
    

//     render() {
//         return (
//             <UsersProfile { ...this.props } />
//         )
//     }

// }

// let mapStateToProps = (state) => ({
//     postsData: state.profileReduser.postsData,
//     userData: state.profileReduser.userData,
//     postsData_count: state.profileReduser.postsData_count,
// });

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setUserData: (newUserData) => {
//             dispatch(setUserDataAC(newUserData))
//         },

//         addPost: (text) => {
//             dispatch(addPostAC(text))
//         },
//     }
// };


// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }

//     return ComponentWithRouterProp;
// }



// export default connect(mapStateToProps, mapDispatchToProps) (withRouter(UsersProfileContainer));