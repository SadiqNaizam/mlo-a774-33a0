import React from 'react';

// Custom Layout Components
import AppHeader from '@/components/layout/AppHeader';
import LeftSidebar from '@/components/layout/LeftSidebar';
import PlayerFooter from '@/components/layout/PlayerFooter';

// Custom Content Components
import ContentCard from '@/components/ContentCard';

// shadcn/ui Components
import { ScrollArea } from '@/components/ui/scroll-area';

// Placeholder data for content cards
const featuredPlaylists = [
  {
    title: "Doraemon's Pocket Hits",
    imageUrl: 'https://i.pinimg.com/564x/b9/09/49/b90949583151ac35b02868276b4d368e.jpg',
    href: '/playlist',
  },
  {
    title: "Nobita's Lazy Day",
    imageUrl: 'https://i.pinimg.com/564x/d3/15/8e/d3158e79e64a6f2334b179b524716768.jpg',
    href: '/playlist',
  },
  {
    title: 'Shizuka\'s Melody',
    imageUrl: 'https://i.pinimg.com/564x/4a/12/35/4a12354c4c23f7c3e5a55d1433a59480.jpg',
    href: '/playlist',
  },
  {
    title: 'Gian\'s Concert Anthems',
    imageUrl: 'https://i.pinimg.com/564x/3c/65/d2/3c65d221c330f895c026b771691b058c.jpg',
    href: '/artist',
  },
  {
    title: 'Anywhere Door Travel Mix',
    imageUrl: 'https://i.pinimg.com/564x/a4/c8/13/a4c81308a09f87f272c4314c1e63a1c8.jpg',
    href: '/playlist',
  },
];

const newReleases = [
    {
    title: 'Time Machine Lo-fi',
    imageUrl: 'https://i.pinimg.com/564x/44/2c/64/442c647b0e12d8a576395b871c4c84a8.jpg',
    href: '/playlist',
  },
  {
    title: 'Suneo\'s Rich Beats',
    imageUrl: 'https://i.pinimg.com/564x/e7/7e/15/e77e155b9a8427f7f32d847ffb007d4b.jpg',
    href: '/artist',
  },
  {
    title: 'Future Department Gadget Sounds',
    imageUrl: 'https://i.pinimg.com/564x/9b/a0/0b/9ba00b41c6f55465c40a7a40dd7c4e51.jpg',
    href: '/playlist',
  },
    {
    title: 'Dorami\'s Favorite Tracks',
    imageUrl: 'https://i.pinimg.com/564x/87/05/73/870573950e39535352c3c6f470265275.jpg',
    href: '/playlist',
  },
   {
    title: '22nd Century Pop',
    imageUrl: 'https://i.pinimg.com/564x/e5/23/69/e5236979e2b109b8b0e4e738c642636f.jpg',
    href: '/playlist',
  },
];


const Home = () => {
  console.log('Home page loaded');

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      <LeftSidebar />
      <div className="relative flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto">
          <AppHeader />
          <div className="px-6 py-4 pb-28"> {/* Padding bottom for the player */}
            <section className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">Good Afternoon</h1>
              {/* This could be a grid of quick access items in the future */}
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">Featured Playlists</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {featuredPlaylists.map((playlist) => (
                  <ContentCard
                    key={playlist.title}
                    title={playlist.title}
                    imageUrl={playlist.imageUrl}
                    href={playlist.href}
                  />
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">New Releases</h2>
               <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {newReleases.map((release) => (
                  <ContentCard
                    key={release.title}
                    title={release.title}
                    imageUrl={release.imageUrl}
                    href={release.href}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
        <PlayerFooter />
      </div>
    </div>
  );
};

export default Home;