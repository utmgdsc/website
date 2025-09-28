import { ErrorBoundary } from '~/components/client';
import { getProprietaryURL, WorkshopArchiveInfo } from '~/components/server';
import { ResourceLayout } from '~/layouts/ResourceLayout';

export const metadata = {
	title: 'Workshop Archive',
};

/**
 * @return Workshop page component
 */
const WorkshopArchive = async () => (
	<ResourceLayout
		title={metadata.title}
		position="bottom"
		picture={getProprietaryURL('heroes/wit-workshop.jpg')}
		headerProps={{
			imgProps: {
				width: 4608,
				height: 3072,
			},
		}}
		id="workshop-archive"
	>
		<ErrorBoundary>
			<WorkshopArchiveInfo />
		</ErrorBoundary>
	</ResourceLayout>
);

export default WorkshopArchive;
