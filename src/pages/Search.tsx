import React, { useState } from 'react';

// Layout Components
import AppHeader from '../components/layout/AppHeader';
import LeftSidebar from '../components/layout/LeftSidebar';
import PlayerFooter from '../components/layout/PlayerFooter';

// Custom Components
import SongListItem from '../components/SongListItem';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Icons
import { Search as SearchIcon } from 'lucide-react';

// Placeholder data for search results
const placeholderSongs = [
  {
    songId: 'dora-1',
    title: 'Yume wo Kanaete Doraemon',
    artist: 'mao',
    duration: '4:06',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d2a3c4a2e4def31b53549a19',
  },
  {
    songId: 'dora-2',
    title: 'Doraemon no Uta',
    artist: 'Kumiko Osugi',
    duration: '2:59',
    imageUrl: 'https://i1.sndcdn.com/artworks-000199427204-6adpt3-t500x500.jpg',
  },
  {
    songId: 'dora-3',
    title: 'Himawari no Yakusoku',
    artist: 'Motohiro Hata',
    duration: '5:15',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738f8f2385c7f2081f9538804c',
  },
  {
    songId: 'dora-4',
    title: 'Boku no Nooto',
    artist: 'Sukima Switch',
    duration: '4:57',
    imageUrl: 'https://e.snmc.io/i/600/s/e5927c73ed51480f7f4577f8cc930030/3336214',
  },
];

const placeholderArtists = [
    { name: 'mao', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Kumiko Osugi', imageUrl: 'https://via.placeholder.com/150' },
];

const SearchPage = () => {
  console.log('SearchPage loaded');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex h-screen bg-background text-foreground">
      <LeftSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader />
        <ScrollArea className="flex-1">
          <main className="container mx-auto px-4 py-8 lg:px-8">
            {/* Search Input Section */}
            <div className="relative mb-8">
              <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="What do you want to listen to?"
                className="h-12 w-full rounded-full border-2 border-transparent bg-muted pl-12 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Search Results Section */}
            <Tabs defaultValue="songs" className="w-full">
              <TabsList>
                <TabsTrigger value="songs">Songs</TabsTrigger>
                <TabsTrigger value="artists">Artists</TabsTrigger>
                <TabsTrigger value="albums">Albums</TabsTrigger>
              </TabsList>
              
              {/* Songs Tab */}
              <TabsContent value="songs" className="mt-6">
                <div className="flex flex-col gap-1">
                  {placeholderSongs.map((song) => (
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

              {/* Artists Tab */}
              <TabsContent value="artists" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {placeholderArtists.map((artist) => (
                     <Card key={artist.name} className="hover:bg-accent/50 cursor-pointer">
                        <CardContent className="p-4 flex flex-col items-center gap-4">
                           <img src={artist.imageUrl} alt={artist.name} className="w-32 h-32 rounded-full object-cover"/>
                           <p className="font-semibold">{artist.name}</p>
                        </CardContent>
                     </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Albums Tab */}
              <TabsContent value="albums" className="mt-6">
                 <Card>
                    <CardHeader>
                        <CardTitle>Albums</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Album results would appear here.</p>
                    </CardContent>
                 </Card>
              </TabsContent>
            </Tabs>
          </main>
        </ScrollArea>
      </div>
      <PlayerFooter />
    </div>
  );
};

export default SearchPage;