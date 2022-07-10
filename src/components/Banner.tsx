import { Section } from '../layout/Section';
import { Button } from './button/Button';
import { CTABanner } from './cta/CTABanner';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Start your Free Trial."
      button={<Button>Get Started</Button>}
    />
  </Section>
);

export { Banner };
