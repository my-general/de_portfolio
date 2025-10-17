// src/app/api/github-status/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  // Get the repo name from the query parameters (e.g., /api/github-status?repo=my-repo-name)
  const { searchParams } = new URL(request.url);
  const repo = searchParams.get('repo');

  // IMPORTANT: Change 'yourusername' to your actual GitHub username
  const githubUsername = 'SYED-TAHER'; 

  if (!repo) {
    return NextResponse.json({ error: 'Repo parameter is required' }, { status: 400 });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const url = `https://api.github.com/repos/${githubUsername}/${repo}/commits`;

  try {
    const response = await fetch(url, {
      headers: {
        // Use the secure token for authentication to avoid rate limits
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      },
      // Revalidate data every hour to keep it fresh but not hit the API on every single visit
      next: { revalidate: 3600 } 
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const commits = await response.json();

    // Find the most recent commit date
    const lastCommitDate = commits[0]?.commit?.author?.date;

    return NextResponse.json({ lastCommitDate });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch commit data' }, { status: 500 });
  }
}