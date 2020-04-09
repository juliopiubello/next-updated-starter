import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { NextSeo } from 'next-seo';
import useSWR from 'swr';

function fetcher(url: string) {
  return fetch(url).then(r => r.json());
}

const IndexPage: React.FC<{}> & NextPage<{}> = () => {
	
	const { data, error } = useSWR('/api/index', fetcher);

	let message: string = data?.message;

  if (!data) message = 'Loading...';
  if (error) message = 'Failed to fetch the quote.';
	
	return (
	<>
		<NextSeo
			title="Home"
			description=""
		/>
		<main>
      {message && <span className="message">- {message}</span>}
    </main>
	</>
)};

IndexPage.getInitialProps = async (_ctx: NextPageContext) => ({});

export default IndexPage;
