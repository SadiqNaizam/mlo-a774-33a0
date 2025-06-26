import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ContentCardProps {
  /** The title of the playlist or album. */
  title: string;
  /** The URL for the cover art image. */
  imageUrl: string;
  /** The navigation path when the card is clicked. */
  href: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, imageUrl, href }) => {
  console.log('ContentCard loaded for:', title);

  return (
    <Link to={href} className="block group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-background rounded-lg">
      <Card className="w-full overflow-hidden transition-all duration-300 ease-in-out bg-neutral-800/50 hover:bg-neutral-700/60 border-none h-full">
        <CardContent className="p-4 space-y-4">
          <AspectRatio ratio={1 / 1} className="overflow-hidden rounded-md shadow-lg">
            <img
              src={imageUrl || 'https://placehold.co/300x300/1e293b/ffffff?text=DoraeSoundify'}
              alt={`Cover for ${title}`}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </AspectRatio>
          <div className="flex flex-col">
            <h3 className="font-bold text-white truncate text-base">{title}</h3>
            {/* A placeholder for a potential future description, e.g., Artist name or playlist creator */}
            {/* <p className="text-sm text-neutral-400 truncate">Description</p> */}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ContentCard;