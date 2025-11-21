import Container from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/motion";
import { Users, Music, Trophy } from "lucide-react";

export default function StudentLife() {
    return (
        <section className="py-24 bg-muted/30">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <FadeIn>
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                                Campus Life
                            </div>
                            <h2 className="text-4xl font-bold text-foreground sm:text-5xl tracking-tight">
                                Vibrant <span className="text-primary">Student Life</span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                At Global, vibrant student life goes hand in hand with academic excellence, offering a rich array of extracurricular activities, clubs, and events that foster personal growth, friendships, and unforgettable memories.
                            </p>
                            <div className="grid grid-cols-3 gap-6 pt-6">
                                <div className="text-center p-4 rounded-xl bg-background shadow-sm border border-border/50">
                                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                                    <div className="font-semibold">Clubs</div>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-background shadow-sm border border-border/50">
                                    <Music className="h-8 w-8 mx-auto mb-2 text-primary" />
                                    <div className="font-semibold">Events</div>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-background shadow-sm border border-border/50">
                                    <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
                                    <div className="font-semibold">Sports</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2} className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        {/* Placeholder for Student Life Image */}
                        <div className="text-center">
                            <div className="text-6xl mb-4">🎭</div>
                            <p className="text-muted-foreground font-medium">Student Activities</p>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}
