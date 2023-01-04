import GithubIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<GithubIcon />', () => {
  it('should render GithubIcon', () => {
    const renderTree = renderWithTheme(
      <GithubIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
