import { SignedIn, SignedOut, SignInButton, UserButton, SignIn } from "@clerk/remix";
import type { MetaFunction } from "@remix-run/node";
import { ClerkProvider} from '@clerk/clerk-react'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const key = 'pk_test_b3B0aW11bS1yYXktODcuY2xlcmsuYWNjb3VudHMuZGV2JA'
  return (
    <ClerkProvider  publishableKey={key} signInUrl='/sign-in'>
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          lineHeight: "1.4",
          textAlign: "center",
        }}
      >
        <h1>Hello Clerk!</h1>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
          <SignIn />
        </SignedOut>
      </div>
    </ClerkProvider>
  );
}
