import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Catches render-time exceptions anywhere in the tree so users never see a
 * blank white screen. Technical details are logged, never shown to the user.
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Keep the raw Error so the stack survives in monitoring/console.
    console.error(error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-3">
            Something went wrong
          </h1>
          <p className="text-muted-foreground mb-8">
            We hit an unexpected problem loading this page. Please try again — if it keeps
            happening, reach us at info@impexus.co.in.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={this.handleReset}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Try again
            </button>
            <a
              href="/"
              className="border border-border px-6 py-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
