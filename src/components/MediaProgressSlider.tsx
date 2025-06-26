import React from 'react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface MediaProgressSliderProps {
  /** The current playback time in seconds. */
  currentTime: number;
  /** The total duration of the media in seconds. */
  duration: number;
  /** Callback function triggered when the user seeks a new position. The value is an array with a single number. */
  onSeek: (value: number[]) => void;
  /** Optional class name for custom styling. */
  className?: string;
}

/**
 * A utility function to format seconds into a mm:ss string.
 * @param timeInSeconds The time in seconds to format.
 * @returns A string in "minutes:seconds" format (e.g., "03:21").
 */
const formatTime = (timeInSeconds: number): string => {
  if (isNaN(timeInSeconds) || timeInSeconds < 0) {
    return '0:00';
  }
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const MediaProgressSlider: React.FC<MediaProgressSliderProps> = ({
  currentTime,
  duration,
  onSeek,
  className,
}) => {
  console.log('MediaProgressSlider loaded');

  // Use onValueCommit to seek only when the user releases the slider, preventing excessive updates during drag.
  // Or use onValueChange for live seeking feedback. onValueChange is often preferred for media players.
  const handleSeek = (value: number[]) => {
    if (onSeek) {
      onSeek(value);
    }
  };

  return (
    <div className={cn('flex items-center gap-3 w-full', className)}>
      <span className="text-xs font-mono text-muted-foreground w-12 text-right tabular-nums">
        {formatTime(currentTime)}
      </span>
      <Slider
        value={[currentTime]}
        max={duration || 100} // Provide a fallback max value to prevent errors if duration is 0
        step={1}
        onValueChange={handleSeek}
        className="flex-1"
        aria-label="Song progress slider"
      />
      <span className="text-xs font-mono text-muted-foreground w-12 text-left tabular-nums">
        {formatTime(duration)}
      </span>
    </div>
  );
};

export default MediaProgressSlider;