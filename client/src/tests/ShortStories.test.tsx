// Package imports
import { render, screen } from '@testing-library/react';
// Component
import ShortStories from '../components/ShortStories';

describe('ShortStories component', () => {
  beforeEach(() => {
    render(<ShortStories />);
  });

  it('renders the ShortStories component', () => {
    expect.anything();
  });
  it('displays the placeholder story', () => {
    const title = screen.getByRole('heading', {
      name: /short stories/i,
    });
    const content = screen.getByText(
      /cat ipsum dolor sit amet, ooh, are those your \$250 dollar sandals\? lemme use that as my litter box so commence midnight zoomies\. plop down in the middle where everybody walks small kitty warm kitty little balls of fur cat dog hate mouse eat string barf pillow no baths hate everything eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table, for love you, then bite you, for open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow!\. sniff other cat's butt and hang jaw half open thereafter\. freak human out make funny noise mow mow mow mow mow mow success now attack human wack the mini furry mouse\. lie in the sink all day eat grass, throw it back up so making bread on the bathrobe but meoooow\. meeeeouw pretend you want to go out but then don't\. nap all day then cats take over the world\. i is not fat, i is fluffy attack the dog then pretend like nothing happened\./i,
    );

    expect(title).toBeVisible();
    expect(content).toBeVisible();
  });
});
