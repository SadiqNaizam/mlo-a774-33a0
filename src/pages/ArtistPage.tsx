import React from 'react';

// Layout Components
import AppHeader from '@/components/layout/AppHeader';
import LeftSidebar from '@/components/layout/LeftSidebar';
import PlayerFooter from '@/components/layout/PlayerFooter';

// Custom Components
import SongListItem from '@/components/SongListItem';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { User } from 'lucide-react';

// Placeholder data for the artist page
const artist = {
  name: 'mao',
  followers: '1.2M Followers',
  imageUrl: 'https://i.pravatar.cc/150?u=mao', // Placeholder image
};

const popularSongs = [
  {
    songId: 1,
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d2a3c4a2e4def31b53549a19',
    title: 'Yume wo Kanaete Doraemon',
    artist: 'mao',
    duration: '4:18',
  },
  {
    songId: 2,
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
    title: 'Doraemon no Uta',
    artist: 'Kumiko Osugi',
    duration: '2:55',
  },
  {
    songId: 3,
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e787cff9a42d59e7a8957585',
    title: 'Himawari no Yakusoku',
    artist: 'Motohiro Hata',
    duration: '5:15',
  },
  {
    songId: 4,
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738a39b5a76579601d3a5a7d2e',
    title: '360°',
    artist: 'miwa',
    duration: '4:30',
  },
];

const albums = [
  {
    id: 1,
    title: 'Doraemon TV & Movie Themes',
    year: '2007',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d2a3c4a2e4def31b53549a19',
  },
  {
    id: 2,
    title: 'Stand By Me Doraemon OST',
    year: '2014',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e787cff9a42d59e7a8957585',
  },
  {
    id: 3,
    title: 'Doraemon 2017 Movie Soundtrack',
    year: '2017',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738a39b5a76579601d3a5a7d2e',
  },
];

const ArtistPage = () => {
  console.log('ArtistPage loaded');

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      <LeftSidebar />
      <main className="flex flex-1 flex-col">
        <AppHeader />
        <ScrollArea className="flex-1">
          <div className="px-4 py-6 lg:px-8">
            {/* Artist Header */}
            <section className="mb-8 flex flex-col items-center gap-6 rounded-lg bg-gradient-to-b from-blue-400/30 to-transparent p-6 md:flex-row">
              <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
                <AvatarImage src={artist.imageUrl} alt={artist.name} />
                <AvatarFallback>
                  <User className="h-16 w-16" />
                </AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                  {artist.name}
                </h1>
                <p className="mt-2 text-muted-foreground">{artist.followers}</p>
                <Button className="mt-4">Follow</Button>
              </div>
            </section>

            {/* Popular Songs */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold tracking-tight">
                Popular
              </h2>
              <div className="flex flex-col gap-1">
                {popularSongs.map((song) => (
                  <SongListItem
                    key={song.songId}
                    songId={song.songId}
                    imageUrl={song.imageUrl}
                    title={song.title}
                    artist={song.artist}
                    duration={song.duration}
                  />
                ))}
              </div>
            </section>

            {/* Albums */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight">
                Albums
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {albums.map((album) => (
                  <div key={album.id} className="group flex cursor-pointer flex-col gap-2">
                    <div className="overflow-hidden rounded-md shadow-md">
                      <img
                        src={album.imageUrl}
                        alt={album.title}
                        className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="font-semibold truncate">{album.title}</p>
                      <p className="text-sm text-muted-foreground">{album.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </ScrollArea>
      </main>
      <PlayerFooter />
    </div>
  );
};

export default ArtistPage;