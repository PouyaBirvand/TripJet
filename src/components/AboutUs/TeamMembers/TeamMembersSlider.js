'use client';
import Slider from '../../home/Slider/Slider';
import SecHeader from '../../home/Slider/Components/SecHeader';
import TeamMemberBox from './TeamMemberBox';
import { Users } from 'lucide-react';

export default function TeamMembersSlider({ members }) {
  return (
    <div className="mb-16">
      <Slider
        items={members}
        buttonsPosition="sides"
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 12 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
          1280: { slidesPerView: 6, spaceBetween: 16 },
        }}
        defaultSlidesPerView={1}
        renderItem={item => (
          <div>
            <TeamMemberBox item={item} />
          </div>
        )}
      >
        <div className="relative top-1">
          <SecHeader lTitle="اعضای تیم">
            <Users size={28} className="text-blue-600 relative mt-1" />
          </SecHeader>
        </div>
      </Slider>
    </div>
  );
}
