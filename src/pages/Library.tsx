import React from 'react';

// Layout Components
import AppHeader from '@/components/layout/AppHeader';
import LeftSidebar from '@/components/layout/LeftSidebar';
import PlayerFooter from '@/components/layout/PlayerFooter';

// UI Components
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentCard from '@/components/ContentCard';
import SongListItem from '@/components/SongListItem';

// Placeholder Data
const createdPlaylists = [
  {
    title: 'Doraemon\'s Pocket Mix',
    imageUrl: 'https://i.pinimg.com/564x/d8/b1/c3/d8b1c3271116a4ca209a4738a03a4897.jpg',
    href: '/playlist',
  },
  {
    title: 'Nobita\'s Study Beats',
    imageUrl: 'https://i.pinimg.com/564x/f3/0e/69/f30e69315d97f2237061c77983b63b27.jpg',
    href: '/playlist',
  },
  {
    title: 'Chill Vibes',
    imageUrl: 'https://placehold.co/300x300/1DB954/FFFFFF?text=Chill',
    href: '/playlist',
  },
  {
    title: 'Workout Fuel',
    imageUrl: 'https://placehold.co/300x300/F44336/FFFFFF?text=Fit',
    href: '/playlist',
  },
];

const likedSongs = [
  {
    songId: 1,
    title: 'Yume wo Kanaete Doraemon',
    artist: 'mao',
    duration: '4:06',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d2a3c4a2e4def31b53549a19',
  },
  {
    songId: 2,
    title: 'Himawari no Yakusoku',
    artist: 'Motohiro Hata',
    duration: '5:14',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273b53a0a3b2b0f0b8d5e0a6e1a',
  },
  {
    songId: 3,
    title: 'Niji',
    artist: 'Masaki Suda',
    duration: '4:24',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738a3c8936a2824e8c1f9c8d5d',
  },
];

const followedArtists = [
  {
    title: 'mao',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb1e5a3c6c0b9a6a8e8b6b2b4c',
    href: '/artist',
  },
  {
    title: 'Gen Hoshino',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb989ed95c373a0e63dd557451',
    href: '/artist',
  },
  {
    title: 'Official HIGE DANdism',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb5a73e5859a724589a1758c8c',
    href: '/artist',
  },
];

const Library = () => {
  console.log('Library page loaded');

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <LeftSidebar />
      <div className="flex-1 flex flex-col">
        <AppHeader />
        <ScrollArea className="flex-1">
          <main className="p-6 space-y-6 pb-28">
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              Your Library
            </h1>
            <Tabs defaultValue="playlists" className="w-full">
              <TabsList>
                <TabsTrigger value="playlists">Playlists</TabsTrigger>
                <TabsTrigger value="songs">Liked Songs</TabsTrigger>
                <TabsTrigger value="artists">Artists</TabsTrigger>
              </TabsList>
              
              <TabsContent value="playlists" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                  {createdPlaylists.map((playlist) => (
                    <ContentCard
                      key={playlist.title}
                      title={playlist.title}
                      imageUrl={playlist.imageUrl}
                      href={playlist.href}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="songs" className="mt-6">
                <div className="flex flex-col gap-1">
                  {likedSongs.map((song) => (
                    <SongListItem
                      key={song.songId}
                      songId={song.songId}
                      title={song.title}
                      artist={song.artist}
                      duration={song.duration}
                      imageUrl={song.imageUrl}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="artists" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                  {followedArtists.map((artist) => (
                    <ContentCard
                      key={artist.title}
                      title={artist.title}
                      imageUrl={artist.imageUrl}
                      href={artist.href}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </ScrollArea>
      </div>
      <PlayerFooter />
    </div>
  );
};

export default Library;