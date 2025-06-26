import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');
  const playlists = [
    'Chill Vibes',
    'Lofi Beats',
    'Workout Fuel',
    'Doraemon OSTs',
    'Anime Openings',
    'Late Night Study',
    'Road Trip Mix',
    'Indie Favorites',
    'Acoustic Covers',
    'Throwback Jams',
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-primary/10 text-primary'
        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
    }`;

  return (
    <aside className="hidden h-screen w-72 flex-col border-r bg-card p-4 md:flex">
      <div className="flex flex-col gap-4">
        <nav className="flex flex-col gap-1">
          <NavLink to="/" className={navLinkClasses}>
            <Home className="h-4 w-4" />
            Home
          </NavLink>
          <NavLink to="/search" className={navLinkClasses}>
            <Search className="h-4 w-4" />
            Search
          </NavLink>
          <NavLink to="/library" className={navLinkClasses}>
            <Library className="h-4 w-4" />
            Your Library
          </NavLink>
        </nav>
      </div>

      <div className="mt-4 flex flex-1 flex-col overflow-hidden rounded-lg border bg-background">
        <div className="flex items-center justify-between p-3">
          <h2 className="text-lg font-semibold tracking-tight">Playlists</h2>
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Create Playlist</span>
          </Button>
        </div>
        <ScrollArea className="flex-1 px-1">
          <div className="p-2">
            {playlists.map((playlist) => (
              <Button
                key={playlist}
                variant="ghost"
                className="w-full justify-start font-normal"
              >
                {playlist}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default LeftSidebar;