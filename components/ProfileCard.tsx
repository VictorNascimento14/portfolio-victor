import React from 'react';
import TiltedCard from '../src/component/TiltedCard';

const ProfileCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-full [perspective:1000px]">
      <TiltedCard
        imageSrc="/perfil.jpg"
        altText="Victor Nascimento - GNX Album Cover"
        captionText="Victor Nascimento - Engenheiro de Software"
        containerHeight="380px" // Ajustado para manter a altura original do seu card
        containerWidth="300px"
        imageHeight="350px"
        imageWidth="350px"
        rotateAmplitude={12}
        scaleOnHover={1.1}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="tilted-card-demo-text bg-black/40 backdrop-blur-md p-2 rounded-lg">
            <p className="text-white font-bold">Victor Nascimento</p>
            <p className="text-gray-200 text-sm font-light">Desenvolvedor Fullstack</p>
          </div>
        }
      />
    </div>
  );
};

export default ProfileCard;