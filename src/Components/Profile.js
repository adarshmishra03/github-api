import React, { Component } from 'react';


class Profile extends Component {
  render(){
    let userdata = this.props.userData;
    let followers = `${userdata.homeURL}/followers`;
    let following = `${userdata.homeURL}/following`;
    let repos = `${userdata.homeURL}/repos`;

    if(userdata.notFound === 'Not Found'){
        return (
            <div className="notFound">
                <h2>heyyyy</h2>
                <p>Are you sure , for whom you are looking for ???</p>
            </div>
        );
    }
    else{
        return (
            <section className="github-profile">
                <div className="github-profile-info">
                    <a href={userdata.homeURL} target="_blank" title={userdata.name || userdata.username}><img src={userdata.avatar} /></a>
                    <h2><a href={userdata.homeURL} title={userdata.username} target="_blank">{userdata.name || userdata.username}</a></h2>
                </div>
                <div className="github-profile-state">
                    <ul>
                        <li>
                            <a href={followers} target="_blank" title="Number Of Followers"><i>{userdata.followers}</i><span>Followers</span></a>
                        </li>
                        <li>
                            <a href={repos} target="_blank" title="Number Of Repositoriy"><i>{userdata.repos}</i><span>Repositoriy</span></a>
                        </li>
                        <li>
                            <a href={following} target="_blank" title="Number Of Following"><i>{userdata.following}</i><span>Following</span></a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
  }
}

export default Profile;
