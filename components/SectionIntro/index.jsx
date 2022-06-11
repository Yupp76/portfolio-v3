import React from 'react'
import { SectionIntroProps } from './constants'

const SectionIntro = ({
  renderAs = SectionIntroProps.renderAs.h3,
  variant = SectionIntroProps.variant.md,
  subtitle,
  title,
  text,
}) => {
  const CostumTag = renderAs

  return (
    <div>
      {!!subtitle && (
        <p className="text-md mb-0-75 uppercase tracking-[3px] font-comp font-semibold text-gray-400/80">{subtitle} —</p>
      )}
      <CostumTag
        className={`mb-0-75 text-gray-900 font-main ${
          variant === SectionIntroProps.variant.lg
            ? 'font-bold lg:text-4xl lg:whitespace-pre-line md:text-3xl text-3xl sm:whitespace-normal'
            : 'font-bold lg:text-3xl text-2xl'
        }`}
      >
        {title}
      </CostumTag>
      {!!text && <p className="text-base mr-0-15 md:mr-0-25">{text}</p>}
    </div>
  )
}

export default SectionIntro
