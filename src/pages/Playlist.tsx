import React from 'react';

// Layout Components
import AppHeader from '@/components/layout/AppHeader';
import LeftSidebar from '@/components/layout/LeftSidebar';
import PlayerFooter from '@/components/layout/PlayerFooter';

// Shadcn/UI Components
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Icons
import { Clock, Music, Play, MoreHorizontal, Heart, Trash2 } from 'lucide-react';

// Placeholder data for the playlist page
const playlistDetails = {
  name: 'Doraemon\'s Pocket Mix',
  description: 'A collection of futuristic and nostalgic tunes, perfect for any adventure.',
  creator: 'Doraemon Fan',
  songCount: 4,
  duration: '14 min',
  imageUrl: 'https://i.pinimg.com/originals/a8/38/a3/a838a3d53b4737c54173873966527b14.jpg',
};

const songs = [
  {
    id: 1,
    title: 'Yume wo Kanaete Doraemon',
    artist: 'mao',
    album: 'Doraemon OST',
    dateAdded: '2 days ago',
    duration: '4:06',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d2a3c4a2e4def31b53549a19',
  },
  {
    id: 2,
    title: 'Himawari no Yakusoku',
    artist: 'Motohiro Hata',
    album: 'Stand By Me Doraemon OST',
    dateAdded: '5 days ago',
    duration: '5:14',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e028b5849129538a68516518731',
  },
  {
    id: 3,
    title: 'Boku Note',
    artist: 'Sukima Switch',
    album: 'Doraemon: Nobita\'s Dinosaur 2006',
    dateAdded: '1 week ago',
    duration: '3:55',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e9e4f2a7a4f1e0a2a5a5e0d8',
  },
  {
    id: 4,
    title: 'Mirai no Museum',
    artist: 'Perfume',
    album: 'LEVEL3',
    dateAdded: '2 weeks ago',
    duration: '3:21',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273f693f0a531e8a94a2b053e1a',
  },
];

const Playlist = () => {
  console.log('Playlist page loaded');

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <LeftSidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto">
          <AppHeader />
          <ScrollArea className="h-[calc(100vh-6rem)]">
            {/* Playlist Header */}
            <section className="flex flex-col gap-6 p-6 md:flex-row md:items-end">
              <img
                src={playlistDetails.imageUrl}
                alt={playlistDetails.name}
                className="h-48 w-48 rounded-lg object-cover shadow-lg md:h-56 md:w-56"
              />
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold">Playlist</span>
                <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
                  {playlistDetails.name}
                </h1>
                <p className="text-muted-foreground">{playlistDetails.description}</p>
                <p className="text-sm">
                  <span className="font-semibold text-foreground">{playlistDetails.creator}</span>
                  {' • '}{playlistDetails.songCount} songs, about {playlistDetails.duration}
                </p>
              </div>
            </section>

            {/* Action Bar */}
            <div className="flex items-center gap-4 px-6 py-4">
              <Button size="lg" className="h-14 w-14 rounded-full">
                <Play className="h-7 w-7 fill-current" />
              </Button>
            </div>

            {/* Songs Table */}
            <div className="px-6 pb-24">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10">#</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Album</TableHead>
                    <TableHead className="hidden lg:table-cell">Date Added</TableHead>
                    <TableHead className="text-right">
                      <Clock className="mx-auto h-4 w-4" />
                    </TableHead>
                    <TableHead className="w-12"><span className="sr-only">Actions</span></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {songs.map((song, index) => (
                    <TableRow key={song.id} className="group">
                      <TableCell className="font-medium text-muted-foreground">{index + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          {song.imageUrl ? (
                             <img src={song.imageUrl} alt={song.title} className="h-10 w-10 rounded-md object-cover"/>
                          ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                                <Music className="h-5 w-5 text-muted-foreground" />
                            </div>
                          )}
                          <div>
                            <p className="font-semibold text-foreground">{song.title}</p>
                            <p className="text-sm text-muted-foreground">{song.artist}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{song.album}</TableCell>
                      <TableCell className="hidden lg:table-cell">{song.dateAdded}</TableCell>
                      <TableCell className="text-right">{song.duration}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                              <MoreHorizontal className="h-5 w-5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Heart className="mr-2 h-4 w-4" />
                              <span>Add to Liked Songs</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500 focus:bg-red-500/10 focus:text-red-500">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Remove from playlist</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </main>
      </div>
      <PlayerFooter />
    </div>
  );
};

export default Playlist;