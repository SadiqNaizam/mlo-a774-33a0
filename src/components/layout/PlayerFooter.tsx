import React, { useState } from 'react';
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Volume2,
  ListMusic
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Slider } from '@/components/ui/slider';
import { MediaProgressSlider } from '@/components/MediaProgressSlider'; // Already-generated component

const PlayerFooter: React.FC = () => {
  console.log('PlayerFooter loaded');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 w-full border-t bg-background">
      <div className="container grid h-24 grid-cols-3 items-center">
        {/* Left: Song Info */}
        <div className="flex items-center gap-3">
          <Avatar className="h-14 w-14 rounded-md">
            <AvatarImage src="https://i.scdn.co/image/ab67616d0000b273d2a3c4a2e4def31b53549a19" />
            <AvatarFallback>
              <ListMusic />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Yume wo Kanaete Doraemon</p>
            <p className="text-sm text-muted-foreground">mao</p>
          </div>
        </div>

        {/* Center: Player Controls */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="h-11 w-11 rounded-full"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          {/* Assumes MediaProgressSlider takes these props */}
          <MediaProgressSlider
            currentTime={45}
            duration={258}
            onSeek={() => console.log('Seek action')}
          />
        </div>

        {/* Right: Volume Control */}
        <div className="flex items-center justify-end gap-2">
          <Volume2 className="h-5 w-5 text-muted-foreground" />
          <Slider
            defaultValue={[volume]}
            max={100}
            step={1}
            className="w-24"
            onValueChange={(value) => setVolume(value[0])}
          />
        </div>
      </div>
    </footer>
  );
};

export default PlayerFooter;