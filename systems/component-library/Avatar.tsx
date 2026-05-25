import React from 'react';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name?: string;
  size?: AvatarSize;
  status?: 'online' | 'offline' | 'idle';
}

const sizeConfig = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

const Initials: React.FC<{ name?: string; size: AvatarSize }> = ({
  name,
  size,
}) => {
  if (!name) return null;

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div
      className={`${sizeConfig[size]} rounded-full bg-primary-500 text-white flex items-center justify-center font-semibold`}
    >
      {initials}
    </div>
  );
};

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  (
    {
      name,
      size = 'md',
      status,
      src,
      alt,
      className = '',
      ...props
    },
    ref
  ) => {
    const statusConfig = {
      online: 'bg-success-500',
      offline: 'bg-secondary-400',
      idle: 'bg-warning-500',
    };

    return (
      <div className="relative inline-block">
        {src ? (
          <img
            ref={ref}
            src={src}
            alt={alt || name}
            className={`${sizeConfig[size]} rounded-full object-cover ${className}`}
            {...props}
          />
        ) : (
          <Initials name={name} size={size} />
        )}

        {status && (
          <div
            className={`absolute bottom-0 right-0 w-3 h-3 ${statusConfig[status]} rounded-full border-2 border-white`}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
