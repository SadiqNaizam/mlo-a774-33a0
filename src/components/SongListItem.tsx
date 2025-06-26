import React from 'react';
import { MoreHorizontal, Music, PlusCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';

interface SongListItemProps {
  imageUrl: string;
  title: string;
  artist: string;
  duration: string;
  songId: string | number;
}

const SongListItem: React.FC<SongListItemProps> = ({
  imageUrl,
  title,
  artist,
  duration,
  songId,
}) => {
  const { toast } = useToast();
  console.log('SongListItem loaded for:', title);

  const handleAddToPlaylist = (playlistName: string) => {
    toast({
      title: 'Success!',
      description: `"${title}" has been added to ${playlistName}.`,
    });
    console.log(`Song ${songId} added to playlist: ${playlistName}`);
  };

  return (
    <div className="flex items-center p-2 rounded-md hover:bg-accent/50 transition-colors group w-full">
      <div className="flex items-center gap-4 flex-1">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-12 h-12 rounded-md object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center">
            <Music className="w-6 h-6 text-muted-foreground" />
          </div>
        )}
        <div className="flex flex-col">
          <p className="font-semibold text-base text-foreground truncate">{title}</p>
          <p className="text-sm text-muted-foreground truncate">{artist}</p>
        </div>
      </div>

      <div className="hidden md:block text-sm text-muted-foreground mx-4">
        {duration}
      </div>

      <div className="ml-auto pl-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <MoreHorizontal className="h-5 w-5" />
              <span className="sr-only">More options for {title}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>Add to Playlist</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuLabel>Your Playlists</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {/* These would be dynamically generated */}
                  <DropdownMenuItem onClick={() => handleAddToPlaylist('Chill Vibes')}>
                    Chill Vibes
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleAddToPlaylist('Workout Mix')}>
                    Workout Mix
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleAddToPlaylist('Study Focus')}>
                    Study Focus
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SongListItem;