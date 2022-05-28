import React, { useEffect } from 'react';
import { RepoStyled } from './RepoStyled';

import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from 'store/githubSlice';
import Moment from 'react-moment';

function Repo() {
    const repos = useSelector((state) => state.github.repos);
    const githubStatus = useSelector((state) => state.github.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (githubStatus !== 'SUCCESS' && githubStatus !== 'PENDING') {
            dispatch(fetchRepos());
        }
    }, [githubStatus]);

    return (
        <RepoStyled>
            <h1>My Projects</h1>
            <h3>Software Repository</h3>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Language</th>
                        <th scope="col">Created at</th>
                    </tr>
                </thead>
                <tbody>
                    {githubStatus === 'SUCCESS' ? (
                        <>
                            {repos.map((rp) => (
                                <tr key={rp.id}>
                                    <td data-label="Name">
                                        <a href={rp.html_url} target="_blank" rel="noreferrer">
                                            {rp.name}
                                        </a>
                                    </td>
                                    <td data-label="Description">
                                        {rp.description === null ? '-' : rp.description}
                                    </td>
                                    <td data-label="Language">{rp.language}</td>
                                    <td data-label="Created at">
                                        <Moment format="DD/MM/YYYY">{rp.created_at}</Moment>
                                    </td>
                                </tr>
                            ))}
                        </>
                    ) : (
                        <tr>
                            <td>No projects found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </RepoStyled>
    );
}

export default Repo;
