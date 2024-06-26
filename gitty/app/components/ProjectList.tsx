"use client";

import { Octokit } from "octokit";
import { useEffect, useState } from "react";

interface Issue {
  created_at: string;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  locked: boolean;
  labels: {
    id?: number;
    node_id?: string;
    url?: string;
    name?: string;
    color?: string;
    default?: boolean;
    description?: string;
  }[];
  // language: string;
}

export const ProjectList = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState<number>(1); // Current page
  const perPage = 5; // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      const octokit = new Octokit({
        auth: process.env.API_KEY,
      });

      const response = await octokit.request("GET /search/issues", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
        q: 'is:issue label:"good first issue" state:open -label:"duplicate" -owner:"AutomationSyncUser"',
        sort: "created",
        order: "desc",
        per_page: perPage,
        page: page,
      });

      // Function to divide date string into components with month name
      const formatDate = (dateString: string) => {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const date = new Date(dateString);
        const year = date.getFullYear();
        const monthIndex = date.getMonth();
        const month = months[monthIndex];
        const day = date.getDate();

        const currentDate = new Date();
        const diffInMilliseconds = currentDate.getTime() - date.getTime();
        const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInDays > 0) {
          return `${month} ${day}, ${year} - ${diffInDays} day${
            diffInDays > 1 ? "s" : ""
          } ago`;
        } else if (diffInHours > 0) {
          return `${month} ${day}, ${year} - ${diffInHours} hour${
            diffInHours > 1 ? "s" : ""
          } ago`;
        } else if (diffInMinutes > 0) {
          return `${month} ${day}, ${year} - ${diffInMinutes} min${
            diffInMinutes > 1 ? "s" : ""
          } ago`;
        } else {
          return `${month} ${day}, ${year} -  ${diffInSeconds} sec${
            diffInSeconds > 1 ? "s" : ""
          } ago`;
        }
      };

      const mappedIssues: Issue[] = response.data.items.map((item: any) => ({
        created_at: formatDate(item.created_at),
        url: item.url,
        repository_url: item.repository_url,
        labels_url: item.labels_url,
        comments_url: item.comments_url,
        events_url: item.events_url,
        html_url: item.html_url,
        id: item.id,
        node_id: item.node_id,
        number: item.number,
        title: item.title,
        locked: item.locked,
        labels: item.labels.map((label: any) => ({
          id: label.id,
          node_id: label.node_id,
          url: label.url,
          name: label.name,
          color: label.color,
          default: label.default,
          description: label.description,
        })),
      }));

      setIssues(mappedIssues);
    };

    fetchData();
  }, [page]); // Trigger fetchData when page changes

  return (
    <div>
      {issues.map((issue) => (
        <div key={issue.id} className='card sm:w-full bg-base-100 border my-4'>
          <div className='card-body'>
            <h4 className='card-title'>
              <a
                className='text-sm md:text-base'
                href={issue.html_url}
                target='_blank'
              >
                {issue.title}
              </a>
            </h4>
            <p className='font-thin text-xs'>{issue.created_at}</p>
            <p className='text-xs'>
              <em>labels:</em>
              {issue.labels.map((label, index) => (
                <span key={index} className='badge badge-accent text-xs m-1'>
                  {label.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}

      <div className='flex justify-between'>
        <button
          className='btn'
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous Page
        </button>

        <button className='btn' onClick={() => setPage(page + 1)}>
          Next Page
        </button>
      </div>
    </div>
  );
};
