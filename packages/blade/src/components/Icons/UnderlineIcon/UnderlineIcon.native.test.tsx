import UnderlineIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<UnderlineIcon />', () => {
  it('should render UnderlineIcon', () => {
    const renderTree = renderWithTheme(
      <UnderlineIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
